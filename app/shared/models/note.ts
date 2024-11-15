export interface APIResponse<T>{
    message?: string;
    data: T;
}
export interface INote{
    // [x: string]: any;
        
        notesId?: any,
        title: string,
        note: string,
        // email:string
        
      }