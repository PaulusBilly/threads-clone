import { Post } from "@/types";
import { View, Text, Image, Pressable } from "react-native";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const formatRelativeTime = (date: string) => {
  const now = dayjs();
  const postDate = dayjs(date);
  const diff = now.diff(postDate, "second");

  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo`;
  return `${Math.floor(diff / 31536000)}y`;
};

export default function PostListItem({ post }: { post: Post }) {
  return (
    <Pressable className="flex-row p-4 border-b border-gray-800/60">
      {/* User Avatar */}
      <Image
        source={{ uri: post.user.image }}
        className="w-12 h-12 rounded-full"
      />

      {/* Content Container */}
      <View className="flex-1 ml-3">
        {/* User Info */}
        <View className="flex-row items-center">
          <Text className="text-white font-bold">{post.user.name}</Text>
          <Text className="text-gray-500 ml-2">
            {formatRelativeTime(post.createdAt)}
          </Text>
        </View>

        {/* Post Content */}
        <Text className="text-white mt-2 leading-5">{post.content}</Text>

        {/* Interaction Buttons */}
        <View className="flex-row gap-8 mt-3">
          <Pressable className="flex-row items-center">
            <MaterialCommunityIcons
              name="heart-outline"
              size={22}
              color="#d1d5db"
            />
            <Text className="text-gray-300 ml-1">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-1">
              {post.replies?.length || 0}
            </Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <MaterialCommunityIcons
              name="repeat-variant"
              size={22}
              color="#d1d5db"
            />
            <Text className="text-gray-300 ml-1">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Feather name="send" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
