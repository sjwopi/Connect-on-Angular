export interface IEventTags {
    id: number
    name: string
    slug: string
}

export interface IEventTopic {
    id: number
    name: string
    slug: string
}

export interface IEventFormat {
    id: number
    name: string
    slug: string
}

export interface IEvent {
    id: number
    title: string
    description: string
    url: string
    image: string
    image_small: string
    program: string
    organizer: string
    partners: string
    address: string
    price: string
    date_start: string
    date_end: string
    created_at: string
    city: string
    tags: IEventTags[]
    topic: IEventTopic[]
    format: IEventFormat[]
    isLiked: boolean
}