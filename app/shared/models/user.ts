export interface APIResponse<T>{
    message?: string;
    data: T;
}
export interface IUser{
    
    "username": string,
    "email": string,
    "password": string
    
  }
 