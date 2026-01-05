import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "#250.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "#150.00",
    paymentMethod: "Debit Card",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "#350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "#450.00",
    paymentMethod: "Debit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "#550.00",
    paymentMethod: "Bank Transfer",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark-navy">
      
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b-2 bg-light-gray p-10 flex justify-between items-center sticky top-0 z-10 shadow-xlg">
        <h1 className="text-xl font-bold text-brand">My SaaS App</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Welcome, Lateef</span>
          <Avatar>
            <AvatarImage src="./Passport.jpg" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-brand tracking-tight">Dashboard</h2>
          <Button className="bg-brand text-white">Download Report</Button>
        </div>

        {/* 3. STATS CARDS GRID */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Card 1: Revenue */}
          <Card className="bg-dark-navy text-light-gray">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <span className="text-gray-500">#</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#45,231.89</div>
              <p className="text-xs text-gray-500">+20.1% from last month</p>
            </CardContent>
          </Card>

          {/* Card 2: Subscriptions */}
          <Card className="bg-dark-navy text-light-gray">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <span className="text-gray-500">Users</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-gray-500">+180.1% from last month</p>
            </CardContent>
          </Card>

          {/* Card 3: Active Now */}
          <Card className="bg-dark-navy text-light-gray">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-gray-500">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
          
          {/* --- TABLE --- */}
        
        <div className="mt-14 grid gap-4 md:grid-cols-1">
          <Card className="bg-dark-navy text-light-gray">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-25 text-brand text-lg">INVOICE</TableHead>
                    <TableHead className="text-brand text-lg">STATUS</TableHead>
                    <TableHead className="text-brand text-lg">METHOD</TableHead>
                    <TableHead className="text-right text-brand text-lg">AMOUNT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">{invoice.invoice}</TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}