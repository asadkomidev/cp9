import { ICodeRepository } from "../repositories";
import { CodeSchemaType } from "../utilities/schemas";

export class CodeService {
  constructor(private _codeRepo: ICodeRepository) {}

  async generateCode(value: CodeSchemaType[]) {
    const data = await this._codeRepo.generateCode(value);
    return data;
  }
}
