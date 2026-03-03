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
  ShieldCheck,
  ChevronRight,
  User,
  CreditCard,
  Bell,
  Lock,
  FileText,
  Edit2,
} from "lucide-react-native";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={{ width: 40 }} />
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={{ width: 40, alignItems: "flex-end" }}>
          <Text style={styles.headerAction}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* User Info */}
        <View style={styles.userInfoForm}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=11" }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Edit2 size={12} color="#fff" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.userName}>Alex Johnson</Text>
            <View style={styles.verifiedBadge}>
              <ShieldCheck size={14} color="#2d5a27" />
              <Text style={styles.verifiedText}>VERIFIED</Text>
            </View>
          </View>
        </View>

        {/* Identity Verified */}
        <View style={styles.identityCard}>
          <View style={styles.identityInfo}>
            <View style={styles.identityIcon}>
              <ShieldCheck size={20} color="#2d5a27" />
            </View>
            <View>
              <Text style={styles.identityTitle}>Identity Verified</Text>
              <Text style={styles.identitySubtitle}>Account is secure</Text>
            </View>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </View>

        {/* My Investments */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Investments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.investmentsGrid}>
            {[
              {
                name: "Eco-Crafts Bali",
                roi: "+12.4%",
                img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=100&h=100&fit=crop",
              },
              {
                name: "Green Bean Co.",
                roi: "+8.2%",
                img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=100&h=100&fit=crop",
              },
              {
                name: "Java Highlands",
                roi: "+15.1%",
                img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=100&h=100&fit=crop",
              },
              {
                name: "Bali Earth",
                roi: "+9.7%",
                img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=100&h=100&fit=crop",
              },
            ].map((item, i) => (
              <View key={i} style={styles.investmentGridItem}>
                <View style={styles.investItemHeader}>
                  <Image
                    source={{ uri: item.img }}
                    style={styles.investItemImage}
                  />
                  <View style={styles.investItemInfo}>
                    <Text style={styles.investItemName}>{item.name}</Text>
                    <Text style={styles.investItemStatus}>Active</Text>
                  </View>
                </View>
                <View style={styles.investItemFooter}>
                  <Text style={styles.investItemFooterLabel}>ROI</Text>
                  <Text style={styles.investItemFooterValue}>{item.roi}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* General */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleSpacing}>General</Text>
          <View style={styles.settingsList}>
            {[
              { icon: User, label: "Personal Info" },
              { icon: CreditCard, label: "Payment Methods" },
              { icon: Bell, label: "Notifications" },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.settingItem, i === 2 && styles.settingItemLast]}
              >
                <View style={styles.settingItemLeft}>
                  <item.icon size={20} color="#374151" />
                  <Text style={styles.settingItemLabel}>{item.label}</Text>
                </View>
                <ChevronRight size={18} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Security */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleSpacing}>Security</Text>
          <View style={styles.settingsList}>
            {[
              { icon: Lock, label: "Change Password" },
              { icon: FileText, label: "Privacy Policy" },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.settingItem, i === 1 && styles.settingItemLast]}
              >
                <View style={styles.settingItemLeft}>
                  <item.icon size={20} color="#374151" />
                  <Text style={styles.settingItemLabel}>{item.label}</Text>
                </View>
                <ChevronRight size={18} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
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
    backgroundColor: "#f9fafb",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  headerAction: { color: "#2d5a27", fontSize: 14, fontWeight: "600" },
  mainContent: { paddingHorizontal: 20, marginTop: 16, gap: 24 },

  userInfoForm: { flexDirection: "row", alignItems: "center", gap: 16 },
  avatarContainer: { position: "relative" },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  editAvatarBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2d5a27",
    padding: 6,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userName: { fontSize: 24, fontWeight: "bold", color: "#111827" },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(45, 90, 39, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  verifiedText: { color: "#2d5a27", fontSize: 10, fontWeight: "bold" },

  identityCard: {
    backgroundColor: "#f0f4f0",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  identityInfo: { flexDirection: "row", alignItems: "center", gap: 12 },
  identityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  identityTitle: { fontWeight: "bold", color: "#111827" },
  identitySubtitle: { fontSize: 12, color: "#6b7280" },

  sectionContainer: {},
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  sectionTitleSpacing: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  seeAllText: { color: "#2d5a27", fontSize: 14, fontWeight: "600" },

  investmentsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  investmentGridItem: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  investItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  investItemImage: { width: 40, height: 40, borderRadius: 20 },
  investItemInfo: { flex: 1 },
  investItemName: { fontWeight: "bold", fontSize: 12, color: "#111827" },
  investItemStatus: { fontSize: 10, color: "#6b7280" },
  investItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  investItemFooterLabel: { fontSize: 12, color: "#9ca3af" },
  investItemFooterValue: { fontSize: 12, fontWeight: "bold", color: "#2d5a27" },

  settingsList: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  settingItemLast: { borderBottomWidth: 0 },
  settingItemLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  settingItemLabel: { fontSize: 14, fontWeight: "500", color: "#374151" },

  logoutButton: {
    backgroundColor: "#fef2f2",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  logoutText: { color: "#ef4444", fontWeight: "bold", fontSize: 16 },
});
