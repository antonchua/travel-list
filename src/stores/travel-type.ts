export namespace TravelType {
  export type ListItemType = {
    quantity: number
    description: string
    id: string
    packed: boolean
    sortId: number
  }
  export enum SortSelect  {
    Order = 'order',
    Description =  'description',
    Status = 'status',
    Quantity = 'quantity'
  }
}