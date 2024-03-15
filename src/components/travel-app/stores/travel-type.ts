export namespace TravelType {
  export type ListItemType = {
    quantity: number
    description: string
    id: number
    packed: boolean
  }
  export enum SortSelect  {
    Order = 'order',
    Description =  'description',
    Status = 'status'
  }
}