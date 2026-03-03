import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ArrowLeft, ShieldCheck, Wallet } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ConfirmScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#111827" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Confirm Investment</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.mainContent}>
          {/* MSME Info */}
          <View style={styles.infoCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=100&h=100&fit=crop",
              }}
              style={styles.infoImage}
            />
            <View>
              <View style={styles.infoTitleRow}>
                <Text style={styles.infoTitle}>Java Highlands Coffee</Text>
                <ShieldCheck size={14} color="#3b82f6" />
              </View>
              <Text style={styles.infoSubtitle}>Sustainable Agriculture</Text>
            </View>
          </View>

          {/* Amount */}
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Investment Amount</Text>
            <View style={styles.amountValueContainer}>
              <Text style={styles.currencySymbol}>$</Text>
              <Text style={styles.amountValue}>500</Text>
            </View>

            <View style={styles.sliderContainer}>
              <View style={[styles.sliderTrack, { width: "50%" }]} />
              <View style={styles.sliderThumb} />
            </View>
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabelText}>$10</Text>
              <Text style={styles.sliderLabelText}>$1,000</Text>
            </View>
          </View>

          {/* Details */}
          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Transaction Fee</Text>
              <Text style={styles.detailValue}>$0.00</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Expected Annual Return</Text>
              <View style={styles.returnBadge}>
                <Text style={styles.returnBadgeText}>12%</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.detailRow}>
              <Text style={styles.totalReturnLabel}>
                Estimated Total Return
              </Text>
              <Text style={styles.totalReturnValue}>$560.00</Text>
            </View>
          </View>

          {/* Impact */}
          <View style={styles.impactCard}>
            <View style={styles.impactIconContainer}>
              <ShieldCheck size={20} color="#2d5a27" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.impactTitle}>Your Impact</Text>
              <Text style={styles.impactText}>
                This investment supports{" "}
                <Text style={styles.impactTextBold}>5 local farmers</Text> in
                expanding their organic crop production.
              </Text>
            </View>
          </View>

          {/* Pay With */}
          <View style={styles.paySection}>
            <Text style={styles.paySectionTitle}>Pay With</Text>
            <View style={styles.payCard}>
              <View style={styles.payCardLeft}>
                <View style={styles.walletIconContainer}>
                  <Wallet size={20} color="#fff" />
                </View>
                <View>
                  <Text style={styles.payCardTitle}>NusaFund Wallet</Text>
                  <Text style={styles.payCardSubtitle}>
                    Balance: $12,450.00
                  </Text>
                </View>
              </View>
              <View style={styles.radioSelected} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainTabs", { screen: "HomeTab" })}
          style={styles.confirmButton}
        >
          <Text style={styles.confirmButtonText}>Confirm & Invest →</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By confirming, you agree to the{" "}
          <Text style={styles.termsTextUnderline}>Terms of Service</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { paddingBottom: 150 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  backButton: { width: 40, alignItems: "flex-start" },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },

  mainContent: { paddingHorizontal: 20, marginTop: 16, gap: 32 },

  infoCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  infoImage: { width: 56, height: 56, borderRadius: 12 },
  infoTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  infoTitle: { fontWeight: "bold", color: "#111827", fontSize: 16 },
  infoSubtitle: { fontSize: 12, color: "#6b7280" },

  amountSection: { alignItems: "center" },
  amountLabel: { fontSize: 14, color: "#6b7280", marginBottom: 8 },
  amountValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 24,
  },
  currencySymbol: { fontSize: 30, fontWeight: "bold", color: "#2d5a27" },
  amountValue: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#111827",
    letterSpacing: -2,
  },

  sliderContainer: {
    width: "100%",
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    position: "relative",
    marginBottom: 8,
  },
  sliderTrack: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#2d5a27",
    borderRadius: 4,
  },
  sliderThumb: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 24,
    height: 24,
    backgroundColor: "#2d5a27",
    borderRadius: 12,
    borderWidth: 4,
    borderColor: "#fff",
    transform: [{ translateX: -12 }, { translateY: -12 }],
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  sliderLabels: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sliderLabelText: { fontSize: 12, color: "#9ca3af", fontWeight: "500" },

  detailsSection: { gap: 16 },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: { fontSize: 14, color: "#6b7280" },
  detailValue: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  returnBadge: {
    backgroundColor: "#dcfce7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  returnBadgeText: { color: "#15803d", fontSize: 12, fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#f3f4f6", marginVertical: 8 },
  totalReturnLabel: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  totalReturnValue: { fontSize: 18, fontWeight: "bold", color: "#2d5a27" },

  impactCard: {
    backgroundColor: "#f0f4f0",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    gap: 16,
  },
  impactIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  impactTitle: { fontWeight: "bold", color: "#2d5a27", marginBottom: 4 },
  impactText: { fontSize: 12, color: "#4b5563", lineHeight: 18 },
  impactTextBold: { fontWeight: "bold", color: "#111827" },

  paySection: {},
  paySectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  payCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#2d5a27",
  },
  payCardLeft: { flexDirection: "row", alignItems: "center", gap: 16 },
  walletIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2d5a27",
    alignItems: "center",
    justifyContent: "center",
  },
  payCardTitle: { fontWeight: "bold", color: "#111827", fontSize: 14 },
  payCardSubtitle: { fontSize: 12, color: "#6b7280", marginTop: 2 },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#2d5a27",
    backgroundColor: "#fff",
  },

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
  },
  confirmButton: {
    backgroundColor: "#2d5a27",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#2d5a27",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  confirmButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  termsText: { textAlign: "center", fontSize: 10, color: "#9ca3af" },
  termsTextUnderline: { textDecorationLine: "underline" },
});
