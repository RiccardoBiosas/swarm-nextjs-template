import { config } from "@/constants/config";
import { Bee } from "@ethersphere/bee-js";

export class StorageService {
  private bee: Bee;

  constructor(beeUrl: string) {
    this.bee = new Bee(beeUrl);
  }

  async uploadData(postageBatchId: string, data: string): Promise<string> {
    const response = await this.bee.uploadData(postageBatchId, data);
    return response.reference;
  }

  async downloadData(reference: string): Promise<string> {
    const data = await this.bee.downloadData(reference);
    return data.text();
  }
}
export const storageService = new StorageService(config.storage.publicSwarmNode);
