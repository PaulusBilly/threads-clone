import { FlatList, StyleSheet, Text, View } from "react-native";
import { posts } from "@/dummyData";
import { Link } from "expo-router";
import PostListItem from "@/components/postListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="text-blue-500 p-4 text-center text-3xl">
          New Post
        </Link>
      )}
    />
  );
}
