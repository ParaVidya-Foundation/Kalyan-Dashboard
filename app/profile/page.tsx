import { ProfileDashboard } from "@/components/users/profile-dashboard"
import { kundliHistory, profileStats, userProfile } from "@/lib/dashboard-data"

export default function ProfilePage() {
  return <ProfileDashboard user={userProfile} stats={profileStats} history={kundliHistory} />
}
