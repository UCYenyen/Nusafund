import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  ArrowLeft,
  MoreHorizontal,
  Eye,
  Plus,
  ArrowDown,
  PiggyBank,
  PieChart,
  ArrowUpRight,
} from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function WalletScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainTabs", { screen: "HomeTab" })}
          style={styles.iconButton}
        >
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MoreHorizontal size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardGlow} />
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Eye size={20} color="rgba(255, 255, 255, 0.6)" />
          </View>
          <Text style={styles.balanceAmount}>$1,240.50</Text>
          <View style={styles.balanceBadgeContainer}>
            <View style={styles.balanceBadge}>
              <ArrowUpRight size={14} color="#fff" />
              <Text style={styles.balanceBadgeText}>+2.4% this week</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.depositButton}>
            <Plus size={18} color="#fff" />
            <Text style={styles.depositButtonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawButton}>
            <ArrowDown size={18} color="#2d5a27" />
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statsCard}>
            <View style={styles.statsHeader}>
              <PiggyBank size={16} color="#6b7280" />
              <Text style={styles.statsHeaderTitle}>LIFETIME</Text>
            </View>
            <Text style={styles.statsAmount}>$450.20</Text>
            <Text style={styles.statsSubtext}>Total Earnings</Text>
          </View>
          <View style={styles.statsCard}>
            <View style={styles.statsHeader}>
              <PieChart size={16} color="#2d5a27" />
              <Text style={[styles.statsHeaderTitle, { color: "#2d5a27" }]}>
                INVESTED
              </Text>
            </View>
            <Text style={styles.statsAmount}>$3,100.00</Text>
            <Text style={styles.statsSubtext}>Current Portfolio</Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.txList}>
            {[
              {
                title: "Deposit via Bank",
                date: "Today, 10:23 AM",
                amount: "+$500.00",
                type: "deposit",
                icon: Plus,
              },
              {
                title: "Inv: Green Coffee",
                date: "Yesterday, 4:15 PM",
                amount: "-$120.50",
                type: "invest",
                icon: PieChart,
              },
              {
                title: "Inv: Clean Water Fund",
                date: "Oct 24, 2023",
                amount: "-$350.00",
                type: "invest",
                icon: PieChart,
              },
              {
                title: "Monthly Interest",
                date: "Oct 01, 2023",
                amount: "+$12.45",
                type: "earn",
                icon: PiggyBank,
              },
            ].map((tx, i) => (
              <View
                key={i}
                style={[styles.txItem, i === 3 && styles.txItemLast]}
              >
                <View
                  style={[
                    styles.txIconContainer,
                    tx.type === "deposit"
                      ? styles.txIconDeposit
                      : tx.type === "invest"
                        ? styles.txIconInvest
                        : styles.txIconEarn,
                  ]}
                >
                  <tx.icon
                    size={20}
                    color={
                      tx.type === "deposit"
                        ? "#2d5a27"
                        : tx.type === "invest"
                          ? "#f97316"
                          : "#3b82f6"
                    }
                  />
                </View>
                <View style={styles.txInfo}>
                  <Text style={styles.txTitle}>{tx.title}</Text>
                  <Text style={styles.txDate}>{tx.date}</Text>
                </View>
                <Text
                  style={[
                    styles.txAmount,
                    tx.amount.startsWith("+")
                      ? styles.txAmountPos
                      : styles.txAmountNeg,
                  ]}
                >
                  {tx.amount}
                </Text>
              </View>
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
    backgroundColor: "#f9fafb",
  },
  iconButton: { padding: 8, marginHorizontal: -8 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  mainContent: { paddingHorizontal: 20, marginTop: 8, gap: 24 },

  balanceCard: {
    backgroundColor: "#1e3f1b",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#1e3f1b",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    overflow: "hidden",
  },
  balanceCardGlow: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 192,
    height: 192,
    backgroundColor: "#fff",
    opacity: 0.05,
    borderRadius: 96,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    zIndex: 10,
  },
  balanceLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
    fontWeight: "500",
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
    zIndex: 10,
  },
  balanceBadgeContainer: { flexDirection: "row", zIndex: 10 },
  balanceBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  balanceBadgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  actionRow: { flexDirection: "row", gap: 12 },
  depositButton: {
    flex: 1,
    backgroundColor: "#2d5a27",
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  depositButtonText: { color: "#fff", fontWeight: "bold" },
  withdrawButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2d5a27",
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  withdrawButtonText: { color: "#2d5a27", fontWeight: "bold" },

  statsRow: { flexDirection: "row", gap: 16 },
  statsCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  statsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  statsHeaderTitle: { fontSize: 12, fontWeight: "bold", color: "#6b7280" },
  statsAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  statsSubtext: { fontSize: 12, color: "#6b7280" },

  sectionContainer: { marginTop: 8 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  seeAllText: { color: "#2d5a27", fontSize: 14, fontWeight: "600" },

  txList: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  txItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  txItemLast: { borderBottomWidth: 0 },
  txIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  txIconDeposit: { backgroundColor: "#f3f4f6" },
  txIconInvest: { backgroundColor: "#fff7ed" },
  txIconEarn: { backgroundColor: "#eff6ff" },
  txInfo: { flex: 1 },
  txTitle: { fontWeight: "bold", color: "#111827", marginBottom: 2 },
  txDate: { fontSize: 12, color: "#6b7280" },
  txAmount: { fontWeight: "bold", fontSize: 15 },
  txAmountPos: { color: "#2d5a27" },
  txAmountNeg: { color: "#111827" },
});
