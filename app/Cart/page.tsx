import { CartDashboard } from "@/components/store/cart-dashboard"
import { cartItems } from "@/lib/dashboard-data"

export default function CartPage() {
  return <CartDashboard initialItems={cartItems} />
}
