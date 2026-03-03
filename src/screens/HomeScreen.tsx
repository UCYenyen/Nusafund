import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Bell,
  Plus,
  ArrowDown,
  FileText,
  Repeat,
  BarChart2,
  MoreHorizontal,
  ArrowRight,
  Heart,
} from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=47" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.title}>NusaFund</Text>
            <Text style={styles.subtitle}>Good Morning, Sarah</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardGlow} />
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$12,450.00</Text>
          <View style={styles.balanceGrowthContainer}>
            <View style={styles.growthBadge}>
              <ArrowRight
                size={14}
                color="#fff"
                style={{ transform: [{ rotate: "-45deg" }] }}
              />
              <Text style={styles.growthText}>+2.4%</Text>
            </View>
            <Text style={styles.growthPeriod}>this month</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.fundButton}>
            <Plus size={18} color="#fff" />
            <Text style={styles.fundButtonText}>Fund Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawButton}>
            <ArrowDown size={18} color="#2d5a27" />
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          {[
            { icon: FileText, label: "History" },
            { icon: Repeat, label: "Transact" },
            { icon: BarChart2, label: "Reports" },
            { icon: MoreHorizontal, label: "More" },
          ].map((action, i) => (
            <View key={i} style={styles.quickActionItem}>
              <TouchableOpacity style={styles.quickActionButton}>
                <action.icon size={24} color="#2d5a27" />
              </TouchableOpacity>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </View>
          ))}
        </View>

        {/* Invite Friends */}
        <View style={styles.inviteCard}>
          <View style={styles.inviteContent}>
            <Text style={styles.inviteTitle}>Invite Friends</Text>
            <Text style={styles.inviteDesc}>
              Get $10 for every friend who joins the impact movement.
            </Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite Now </Text>
              <ArrowRight size={14} color="#2d5a27" />
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop",
            }}
            style={styles.inviteImage}
          />
        </View>

        {/* Saved MSMEs */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Saved MSMEs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.savedScrollContent}
          >
            {[
              {
                name: "Eco-Crafts Bali",
                cat: "Artisan Goods",
                img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=100&h=100&fit=crop",
              },
              {
                name: "Green Bean Co.",
                cat: "Sustainable F&B",
                img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=100&h=100&fit=crop",
              },
            ].map((item, i) => (
              <View key={i} style={styles.savedCard}>
                <View style={styles.savedCardHeader}>
                  <Image source={{ uri: item.img }} style={styles.savedImage} />
                  <View style={styles.savedInfo}>
                    <Text style={styles.savedName}>{item.name}</Text>
                    <Text style={styles.savedCat}>{item.cat}</Text>
                  </View>
                </View>
                <View style={styles.savedActions}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={styles.investButton}
                  >
                    <Text style={styles.investButtonText}>Invest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.heartButton}>
                    <Heart size={16} color="#2d5a27" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Invest in MSMEs */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Invest in MSMEs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.investList}>
            {[
              {
                name: "Java Highlands Coffee",
                desc: "Sustainable coffee farming expansion in West Java.",
                funded: 75,
                trust: "12% Trust Rate",
                img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=100&h=100&fit=crop",
              },
              {
                name: "Bali Earth Ceramics",
                desc: "Scaling production for eco-friendly ceramic exports.",
                funded: 45,
                trust: "12% Trust Rate",
                img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=100&h=100&fit=crop",
              },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate("Detail")}
                style={styles.investCard}
              >
                <View style={styles.investCardHeader}>
                  <Image
                    source={{ uri: item.img }}
                    style={styles.investCardImage}
                  />
                  <View style={styles.investCardInfo}>
                    <Text style={styles.investCardName}>{item.name}</Text>
                    <Text style={styles.investCardDesc}>{item.desc}</Text>
                  </View>
                </View>
                <View style={styles.progressBarBg}>
                  <View
                    style={[
                      styles.progressBarFill,
                      { width: `${item.funded}%` },
                    ]}
                  />
                </View>
                <View style={styles.investCardFooter}>
                  <Text style={styles.fundedText}>{item.funded}% Funded</Text>
                  <View style={styles.trustBadge}>
                    <Text style={styles.trustBadgeText}>{item.trust}</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  userInfo: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  title: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 12, color: "#6b7280" },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: { paddingHorizontal: 20, marginTop: 16, gap: 24 },

  balanceCard: {
    backgroundColor: "#2d5a27",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#2d5a27",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    overflow: "hidden",
  },
  balanceCardGlow: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    backgroundColor: "#fff",
    opacity: 0.05,
    borderRadius: 64,
  },
  balanceLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
  },
  balanceGrowthContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  growthBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  growthText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  growthPeriod: { color: "rgba(255, 255, 255, 0.7)", fontSize: 12 },

  actionRow: { flexDirection: "row", gap: 12 },
  fundButton: {
    flex: 1,
    backgroundColor: "#2d5a27",
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  fundButtonText: { color: "#fff", fontWeight: "bold" },
  withdrawButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  withdrawButtonText: { color: "#2d5a27", fontWeight: "bold" },

  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  quickActionItem: { alignItems: "center", gap: 8 },
  quickActionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  quickActionLabel: { fontSize: 12, color: "#4b5563", fontWeight: "500" },

  inviteCard: {
    backgroundColor: "#f0f4f0",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inviteContent: { flex: 1, paddingRight: 16 },
  inviteTitle: { fontWeight: "bold", color: "#111827", marginBottom: 4 },
  inviteDesc: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 12,
    lineHeight: 18,
  },
  inviteButton: { flexDirection: "row", alignItems: "center", gap: 4 },
  inviteButtonText: { color: "#2d5a27", fontSize: 12, fontWeight: "bold" },
  inviteImage: { width: 80, height: 80, borderRadius: 12 },

  sectionContainer: {},
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  seeAllText: { color: "#2d5a27", fontSize: 14, fontWeight: "600" },

  savedScrollContent: { paddingRight: 20 },
  savedCard: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    marginRight: 16,
  },
  savedCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  savedImage: { width: 48, height: 48, borderRadius: 24 },
  savedInfo: { flex: 1 },
  savedName: { fontWeight: "bold", fontSize: 14, color: "#111827" },
  savedCat: { fontSize: 10, color: "#6b7280" },
  savedActions: { flexDirection: "row", gap: 8 },
  investButton: {
    flex: 1,
    backgroundColor: "#2d5a27",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  investButtonText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  heartButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
  },

  investList: { gap: 16 },
  investCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  investCardHeader: { flexDirection: "row", gap: 16, marginBottom: 16 },
  investCardImage: { width: 64, height: 64, borderRadius: 12 },
  investCardInfo: { flex: 1, justifyContent: "center" },
  investCardName: { fontWeight: "bold", color: "#111827" },
  investCardDesc: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
    lineHeight: 18,
  },
  progressBarBg: {
    backgroundColor: "#f3f4f6",
    height: 6,
    borderRadius: 3,
    marginBottom: 12,
  },
  progressBarFill: {
    backgroundColor: "#2d5a27",
    height: "100%",
    borderRadius: 3,
  },
  investCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fundedText: { fontSize: 12, color: "#6b7280", fontWeight: "500" },
  trustBadge: {
    backgroundColor: "#f0f4f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  trustBadgeText: { color: "#2d5a27", fontSize: 10, fontWeight: "bold" },
});
