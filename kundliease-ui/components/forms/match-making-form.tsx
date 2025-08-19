"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, User } from "lucide-react"

// ---------------- Schema ----------------
const partnerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  day: z.string().min(1, "Day is required"),
  month: z.string().min(1, "Month is required"),
  year: z.string().min(1, "Year is required"),
  placeOfBirth: z.string().min(1, "Place is required"),
  gender: z.enum(["male", "female"], { required_error: "Gender is required" }),
})

export type PartnerFormData = z.infer<typeof partnerSchema>

// ---------------- Partner Form ----------------
export default function MatchMaking({
  title,
  defaultGender,
  onSubmit,
}: {
  title: string
  defaultGender: "male" | "female"
  onSubmit: (data: PartnerFormData) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { gender: defaultGender },
  })

  // Fake autocomplete
  const [suggestions, setSuggestions] = useState<string[]>([])
  const handlePlaceChange = (value: string) => {
    setValue("placeOfBirth", value)
    if (value.length > 2) {
      setSuggestions([`${value} City`, `${value} District`, `${value} Country`])
    } else {
      setSuggestions([])
    }
  }

  return (
    <Card className="w-full max-w-sm shadow-lg rounded-2xl border border-gray-200 bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="w-4 h-4" /> Name
            </Label>
            <Input placeholder="Enter name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label>Gender</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="male" {...register("gender")} /> Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="female" {...register("gender")} /> Female
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          {/* DOB */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Birth Date
            </Label>
            <div className="flex gap-2">
              <select {...register("day")} className="border rounded p-2 w-1/3">
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select {...register("month")} className="border rounded p-2 w-1/3">
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select {...register("year")} className="border rounded p-2 w-1/3">
                <option value="">Year</option>
                {Array.from({ length: 120 }, (_, i) => {
                  const year = new Date().getFullYear() - i
                  return <option key={year} value={year}>{year}</option>
                })}
              </select>
            </div>
            {(errors.day || errors.month || errors.year) && (
              <p className="text-red-500 text-sm">Please select a valid date</p>
            )}
          </div>

          {/* Place */}
          <div className="space-y-2 relative">
            <Label className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Place of Birth
            </Label>
            <Input
              placeholder="City, State, Country"
              {...register("placeOfBirth")}
              onChange={(e) => handlePlaceChange(e.target.value)}
            />
            {errors.placeOfBirth && <p className="text-red-500 text-sm">{errors.placeOfBirth.message}</p>}

            {suggestions.length > 0 && (
              <div className="absolute bg-white border rounded shadow-md mt-1 w-full z-10">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setValue("placeOfBirth", s)
                      setSuggestions([])
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Import Kundli
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
