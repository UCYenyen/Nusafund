import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShieldCheck,
  MapPin,
} from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DetailScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Image */}
        <View style={styles.headerImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&h=600&fit=crop",
            }}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay} />
          <View style={styles.headerNav}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerBtn}
            >
              <ArrowLeft size={20} color="#fff" />
            </TouchableOpacity>
            <View style={styles.headerBtnGroup}>
              <TouchableOpacity style={styles.headerBtn}>
                <Heart size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn}>
                <Share2 size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.mainContent}>
          <View style={styles.tagsRow}>
            <View style={styles.verifiedTag}>
              <ShieldCheck size={12} color="#2d5a27" />
              <Text style={styles.verifiedText}>VERIFIED</Text>
            </View>
            <Text style={styles.categoryText}>Coffee & Beverages</Text>
          </View>

          <Text style={styles.title}>Green Coffee Roastery</Text>
          <Text style={styles.subtitle}>
            Sustainable sourcing from local farmers to cup.
          </Text>

          {/* Progress */}
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View>
                <Text style={styles.progressLabel}>Raised</Text>
                <Text style={styles.raisedAmount}>$15,000</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.progressLabel}>Goal</Text>
                <Text style={styles.goalAmount}>$20,000</Text>
              </View>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: "75%" }]} />
            </View>
            <View style={styles.progressFooter}>
              <Text style={styles.progressSubtext}>75% Funded</Text>
              <Text style={styles.progressSubtext}>5 days left</Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Return</Text>
              <Text style={styles.statValue}>12%</Text>
              <Text style={styles.statSub}>p.a.</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Risk</Text>
              <Text style={styles.statValue}>Low</Text>
              <Text style={styles.statSub}>Medium</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Tenure</Text>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statSub}>Months</Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <View style={[styles.tab, styles.activeTab]}>
              <Text style={[styles.tabText, styles.activeTabText]}>About</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText}>Financials</Text>
            </View>
            <View style={styles.tab}>
              <Text style={styles.tabText}>Impact</Text>
            </View>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About the Business</Text>
            <Text style={styles.sectionText}>
              Green Coffee Roastery is dedicated to bridging the gap between
              ethical farming and your daily cup. By partnering directly with
              local farmers in the highland regions, we ensure fair wages and
              sustainable agricultural practices.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Impact Metrics</Text>
            <View style={styles.impactGrid}>
              <View style={styles.impactItem}>
                <View
                  style={[styles.impactIcon, { backgroundColor: "#dcfce7" }]}
                >
                  <ShieldCheck size={16} color="#16a34a" />
                </View>
                <Text style={styles.impactValue}>2.5t</Text>
                <Text style={styles.impactLabel}>CO2 Saved</Text>
              </View>
              <View style={styles.impactItem}>
                <View
                  style={[styles.impactIcon, { backgroundColor: "#dbeafe" }]}
                >
                  <ShieldCheck size={16} color="#2563eb" />
                </View>
                <Text style={styles.impactValue}>12</Text>
                <Text style={styles.impactLabel}>Jobs Created</Text>
              </View>
              <View style={styles.impactItem}>
                <View
                  style={[styles.impactIcon, { backgroundColor: "#ffedd5" }]}
                >
                  <ShieldCheck size={16} color="#ea580c" />
                </View>
                <Text style={styles.impactValue}>45</Text>
                <Text style={styles.impactLabel}>Farmers</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <View style={styles.mapContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop",
                }}
                style={styles.mapImage}
              />
              <View style={styles.mapOverlay}>
                <MapPin size={32} color="#fff" fill="#2d5a27" />
              </View>
            </View>
            <View style={styles.locationRow}>
              <MapPin size={12} color="#6b7280" />
              <Text style={styles.locationText}>
                Bandung, West Java, Indonesia
              </Text>
            </View>
          </View>

          <View style={{ height: 40 }} />
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>Min. Investment</Text>
          <Text style={styles.bottomValue}>$100</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Confirm")}
          style={styles.investButton}
        >
          <Text style={styles.investButtonText}>Invest Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { paddingBottom: 100 },
  headerImageContainer: { height: 288, position: "relative" },
  headerImage: { width: "100%", height: "100%" },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  headerNav: {
    position: "absolute",
    top: 48,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBtnGroup: { flexDirection: "row", gap: 8 },

  mainContent: {
    backgroundColor: "#fff",
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  tagsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  verifiedTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(45, 90, 39, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  verifiedText: { color: "#2d5a27", fontSize: 10, fontWeight: "bold" },
  categoryText: { color: "#6b7280", fontSize: 12 },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: { fontSize: 14, color: "#4b5563", marginBottom: 24 },

  progressCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  progressLabel: { fontSize: 12, color: "#6b7280", marginBottom: 4 },
  raisedAmount: { fontSize: 24, fontWeight: "bold", color: "#2d5a27" },
  goalAmount: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  progressBarBg: {
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#2d5a27",
    borderRadius: 4,
  },
  progressFooter: { flexDirection: "row", justifyContent: "space-between" },
  progressSubtext: { fontSize: 12, color: "#6b7280" },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  statItem: { alignItems: "center" },
  statLabel: { fontSize: 12, color: "#6b7280", marginBottom: 4 },
  statValue: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  statSub: { fontSize: 10, color: "#9ca3af" },
  statDivider: { width: 1, backgroundColor: "#e5e7eb" },

  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginBottom: 24,
  },
  tab: { flex: 1, paddingBottom: 12, alignItems: "center" },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#2d5a27" },
  tabText: { fontSize: 14, fontWeight: "500", color: "#6b7280" },
  activeTabText: { color: "#2d5a27", fontWeight: "bold" },

  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  sectionText: { fontSize: 14, color: "#4b5563", lineHeight: 22 },

  impactGrid: { flexDirection: "row", gap: 12 },
  impactItem: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  impactIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  impactValue: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  impactLabel: { fontSize: 10, color: "#6b7280" },

  mapContainer: {
    height: 128,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    marginBottom: 8,
    position: "relative",
  },
  mapImage: { width: "100%", height: "100%", opacity: 0.5 },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  locationText: { fontSize: 12, color: "#6b7280" },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLabel: { fontSize: 12, color: "#6b7280", marginBottom: 2 },
  bottomValue: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  investButton: {
    backgroundColor: "#2d5a27",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: "#2d5a27",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  investButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
