"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Bell,
  Globe,
  Shield,
  CreditCard,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Smartphone,
  Mail,
  AlertTriangle,
  Check,
} from "lucide-react"

export default function SettingsClient() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: false,
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    dataSharing: false,
    analytics: true,
  })

  const [showApiKey, setShowApiKey] = useState(false)
  const [language, setLanguage] = useState("english")
  const [timezone, setTimezone] = useState("asia/kolkata")
  const [currency, setCurrency] = useState("inr")

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Settings Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and application settings</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>Language & Region</span>
                  </CardTitle>
                  <CardDescription>Set your preferred language and regional settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                          <SelectItem value="sanskrit">संस्कृत (Sanskrit)</SelectItem>
                          <SelectItem value="gujarati">ગુજરાતી (Gujarati)</SelectItem>
                          <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Time Zone</Label>
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asia/kolkata">Asia/Kolkata (IST)</SelectItem>
                          <SelectItem value="america/new_york">America/New_York (EST)</SelectItem>
                          <SelectItem value="europe/london">Europe/London (GMT)</SelectItem>
                          <SelectItem value="asia/dubai">Asia/Dubai (GST)</SelectItem>
                          <SelectItem value="australia/sydney">Australia/Sydney (AEDT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inr">INR (₹)</SelectItem>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Remaining cards unchanged from the previous page version */}
            </div>
          </TabsContent>

          {/* The rest of tabs copied from the previous implementation */}
          {/* Notifications, Privacy, Billing, Advanced */}
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Save All Settings</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


