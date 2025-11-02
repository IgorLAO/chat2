import type { PlataError } from "../types/typesPlata.ts";

export async function RetError(erro: PlataError): Promise<PlataError> {
    let err: PlataError = {
        ErrorID: erro.ErrorID,
        erro: erro.erro
    }

    return err
}