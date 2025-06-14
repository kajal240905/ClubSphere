import { create } from 'zustand'

const useLikeStore = create((set) => ({
  posts: [], 
  setPosts: (posts) => set({ posts }),

 
  likePost: (postId, updatedLikeCount) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post._id === postId ? { ...post, like: updatedLikeCount } : post
      )
    })),
}))

export default useLikeStore
