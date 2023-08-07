export type Id = string | number

export interface BaseModel {
  id: Id;
  createdAt: Date;
  updatedAt: Date;
}