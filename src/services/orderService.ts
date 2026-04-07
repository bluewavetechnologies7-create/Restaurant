import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const saveOrder = async ({ orderId, items, amount, source }: { orderId: string, items: string, amount: number, source: string }) => {
  try {
    // Normalize source to lowercase for consistency
    const normalizedSource = source.toLowerCase();
    
    // Use the custom orderId as the document ID for easier tracking and to avoid duplicates
    // However, if we want to allow multiple orders with same ID (not recommended), we'd use addDoc.
    // Let's use addDoc but store the orderId field clearly.
    await addDoc(collection(db, "orders"), {
      orderId,
      items,
      amount,
      source: normalizedSource,
      date: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
    throw error;
  }
};
