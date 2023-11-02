export interface ImainRes {
    top_cards: Icards[]
    new_users: InewUser[]
    recent_orders: IrecentUser[]
  }
  
  export interface Icards {
    header: string
    sub_header: string
    value: number
  }
  
  export interface InewUser {
    id: string
    picture: string
    name: string
    isActive: boolean
    country: string
    progress: number
  }
  
  export interface IrecentUser {
    id: string
    name: string
    product: string
    delivery_date: string
    status: string
    tracking_no: string
    shipping: boolean
  }