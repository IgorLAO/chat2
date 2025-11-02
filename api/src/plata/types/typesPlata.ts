export interface PlataError {
    ErrorID: string | undefined
    erro: any
}

export interface SqlResult<T> {
    values?: T
    error?: PlataError
}