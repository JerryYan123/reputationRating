import { IndexService } from "@ethsign/sp-sdk";
import { decodeAbiParameters } from "viem";

const schemaId = "onchain_evm_534351_0x59";
const attester = "0x6373336291468Cb9463d131aF8069a52cda3A537";


function findAttestation(attestations: any[]) {
  // Array to store all parsed attestations
  const parsedAttestations = [];

  // Iterate through the list of attestations
  for (const att of attestations) {
    if (!att.data) continue;

    let parsedData: any = {};
    
    // Parse the data.
    if (att.mode === "onchain") {
      // Looking for nested items in the on-chain schema
      try {
        const data = decodeAbiParameters(
          [att.dataLocation === "onchain" ? { components: att.schema.data, type: "tuple" } : { type: "string" }],
          att.data
        );
        parsedData = data[0];
      } catch (error) {
        // Looking for a regular schema format if the nested parse fails
        try {
          const data = decodeAbiParameters(
            att.dataLocation === "onchain" ? att.schema.data : [{ type: "string" }],
            att.data
          );
          const obj: any = {};
          data.forEach((item: any, i: number) => {
            obj[att.schema.data[i].name] = item;
          });
          parsedData = obj;
        } catch (error) {
          continue;
        }
      }
    } else {
      // Try parsing as a string (off-chain attestation)
      try {
        parsedData = JSON.parse(att.data);
      } catch (error) {
        console.log(error);
        continue;
      }
    }
    
    // Add the parsed attestation to our array
    parsedAttestations.push({ parsedData, attestation: att });
  }
  
  // Return all parsed attestations
  return parsedAttestations;
}


async function queryAttestations(indexingValue: string) {
  const indexService = new IndexService("testnet");

  const response = await indexService.queryAttestationList({
    schemaId: schemaId, // Your full schema's ID
    attester: attester, // Alice's address
    page: 1,
    mode: "onchain", // Data storage location
    indexingValue: indexingValue.toLowerCase(), // Bob's address
  });
  
  console.log(response)
  const data_list = findAttestation(response?.rows ?? []);

  return data_list;
}


// Export
export { queryAttestations, findAttestation };



