import { FlatList, StyleSheet, Text, View } from "react-native";
import { posts } from "@/dummyData";
import PostListItem from "@/components/postListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
