export interface ApiPost {
  createdAt: string,
  title: string,
  description: string,
}

export interface Post extends ApiPost {
  id: string,
}

export interface ApiPosts {
  [id: string]: ApiPost,
}

export interface About {
  name: string
}

export interface Contacts {
  phone: string,
}