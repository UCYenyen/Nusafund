import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Bell,
  Search,
  Star,
  Bookmark,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DiscoverScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Discover</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={20} color="#2d5a27" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Search style={styles.searchIcon} size={20} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search small businesses..."
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <View style={styles.mainContent}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          <TouchableOpacity
            style={[styles.categoryButton, styles.categoryActive]}
          >
            <Text style={[styles.categoryText, styles.categoryTextActive]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Agriculture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Eco-friendly</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Featured MSME */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured MSME</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={styles.featuredCard}
          >
            <View style={styles.featuredImageContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop",
                }}
                style={styles.featuredImage}
              />
              <View style={styles.ratingBadge}>
                <Star size={12} fill="#facc15" color="#facc15" />
                <Text style={styles.ratingText}>Highly Rated</Text>
              </View>
              <TouchableOpacity style={styles.bookmarkButton}>
                <Bookmark size={16} color="#2d5a27" />
              </TouchableOpacity>
            </View>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>Java Highland Coffee</Text>
              <Text style={styles.featuredSubtitle}>
                AGRICULTURE • WEST JAVA
              </Text>
              <Text style={styles.featuredDesc}>
                Empowering 50+ local farmers with sustainable organic farming
                practices and fair trade distribution.
              </Text>
              <View style={styles.featuredFooter}>
                <View>
                  <Text style={styles.footerLabel}>Expected ROI</Text>
                  <Text style={styles.footerValue1}>12-15%</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.footerLabel}>Target</Text>
                  <Text style={styles.footerValue2}>$50,000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Open for Investment */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Open for Investment</Text>
            <TouchableOpacity style={styles.sortButton}>
              <Text style={styles.sortText}>Sort by</Text>
              <SlidersHorizontal size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
          <View style={styles.investList}>
            {[
              {
                name: "Sumatra Craft Textiles",
                cat: "Fashion & Retail",
                roi: "8.5%",
                days: 12,
                progress: 75,
                img: "https://images.unsplash.com/photo-1528301721190-186c3bd85418?w=100&h=100&fit=crop",
              },
              {
                name: "Bali Eco Utensils",
                cat: "Eco-friendly",
                roi: "10.2%",
                days: 24,
                progress: 45,
                img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=100&h=100&fit=crop",
              },
              {
                name: "Rasa Nusantara",
                cat: "Food & Beverage",
                roi: "11.0%",
                days: 3,
                progress: 92,
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&h=100&fit=crop",
              },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate("Detail")}
                style={styles.openCard}
              >
                <Image
                  source={{ uri: item.img }}
                  style={styles.openCardImage}
                />
                <View style={styles.openCardContent}>
                  <View style={styles.openCardHeader}>
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.openCardTitle} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={styles.openCardSubtitle}>{item.cat}</Text>
                    </View>
                    <CheckCircle2 size={16} color="#3b82f6" />
                  </View>
                  <View style={styles.progressBarBg}>
                    <View
                      style={[
                        styles.progressBarFill,
                        { width: `${item.progress}%` },
                      ]}
                    />
                  </View>
                  <View style={styles.openCardFooter}>
                    <View>
                      <Text style={styles.footerDataLabel}>ROI</Text>
                      <Text style={styles.footerDataValue1}>{item.roi}</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text style={styles.footerDataLabel}>Days Left</Text>
                      <Text style={styles.footerDataValue2}>{item.days}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  contentContainer: { paddingBottom: 100 },
  header: {
    backgroundColor: "rgba(249, 250, 251, 0.9)",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#111827" },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: { position: "relative", marginTop: 8 },
  searchIcon: { position: "absolute", left: 12, top: 12, zIndex: 1 },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  mainContent: { paddingHorizontal: 20, marginTop: 16, gap: 24 },
  categoriesScroll: { gap: 12, paddingRight: 20, marginBottom: 8 },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginRight: 12,
  },
  categoryActive: {
    backgroundColor: "#2d5a27",
    borderColor: "#2d5a27",
    shadowColor: "#2d5a27",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  categoryText: { color: "#4b5563", fontSize: 14, fontWeight: "500" },
  categoryTextActive: { color: "#fff", fontWeight: "bold" },

  sectionContainer: { marginTop: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  seeAllText: { color: "#2d5a27", fontSize: 12, fontWeight: "bold" },
  sortButton: { flexDirection: "row", alignItems: "center", gap: 4 },
  sortText: { color: "#6b7280", fontSize: 12, fontWeight: "500" },

  featuredCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  featuredImageContainer: { height: 192, position: "relative" },
  featuredImage: { width: "100%", height: "100%" },
  ratingBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: { fontSize: 12, fontWeight: "bold", color: "#111827" },
  bookmarkButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 8,
    borderRadius: 20,
  },
  featuredContent: { padding: 20 },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  featuredDesc: { fontSize: 14, color: "#4b5563", lineHeight: 22 },
  featuredFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    marginTop: 16,
  },
  footerLabel: { fontSize: 12, color: "#6b7280", marginBottom: 2 },
  footerValue1: { fontSize: 18, fontWeight: "bold", color: "#2d5a27" },
  footerValue2: { fontSize: 18, fontWeight: "bold", color: "#111827" },

  investList: { gap: 16 },
  openCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    flexDirection: "row",
    gap: 16,
  },
  openCardImage: { width: 80, height: 80, borderRadius: 12 },
  openCardContent: { flex: 1 },
  openCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  openCardTitle: { fontWeight: "bold", color: "#111827", fontSize: 15 },
  openCardSubtitle: { fontSize: 12, color: "#6b7280" },
  progressBarBg: {
    height: 6,
    backgroundColor: "#f3f4f6",
    borderRadius: 3,
    marginTop: 8,
    marginBottom: 12,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#2d5a27",
    borderRadius: 3,
  },
  openCardFooter: { flexDirection: "row", justifyContent: "space-between" },
  footerDataLabel: { fontSize: 12, color: "#6b7280", marginBottom: 2 },
  footerDataValue1: { fontSize: 12, fontWeight: "bold", color: "#2d5a27" },
  footerDataValue2: { fontSize: 12, fontWeight: "bold", color: "#111827" },
});
