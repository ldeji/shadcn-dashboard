import { PatientChart } from "@/components/PatientChart"
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

const patient = [
  {
    ID: "P-001",
    name: "Ponle Akins",
    status: "Checked In",
    lastVisit: "Today",
  },
  {
    ID: "P-002",
    name: "Omokaro Lawal",
    status: "Waiting",
    lastVisit: "Jan 5",
  },
  {
    ID: "P-003",
    name: "Ben Carson",
    status: "Completed",
    lastVisit: "Yesterday",
  },
  {
    ID: "P-004",
    name: "Dayo Rahman",
    status: "Checked In",
    lastVisit: "Jan 3",
  },
  {
    ID: "P-005",
    name: "Lateef Dee",
    status: "checked In",
    lastVisit: "Today",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark-navy">
      
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b-2 bg-light-gray p-10 flex justify-between items-center sticky top-0 z-10 shadow-xlg">
        <h1 className="text-xl font-bold text-medical-blue-1">Medicare Portal</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-medical-blue-1">Welcome, Lateef</span>
          <Avatar>
            <AvatarImage src="./Passport.jpg" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-medical-blue-1 tracking-tight">Dashboard</h2>
          <Button className="bg-medical-blue-1 hover:text-light-gray hover:bg-medical-2 transition-all duration-300 text-white hover:-translate-y-1">Download Report</Button>
        </div>

        {/* 3. STATS CARDS GRID */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Card 1: Patients */}
          <Card className="bg-dark-navy text-medical-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <span className="text-medical-blue-1">👨‍👩‍👧‍👦</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,520</div>
              <p className="text-xs text-light-gray">62 newly registered</p>
            </CardContent>
          </Card>

          {/* Card 2: Appointments */}
          <Card className="bg-dark-navy text-medical-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
              <span className="text-medical-blue-1">📅</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-light-gray">3 patients cancelled</p>
            </CardContent>
          </Card>

          {/* Card 3: Waiting */}
          <Card className="bg-dark-navy text-medical-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waiting Room</CardTitle>
              <div className="h-4 w-4 rounded-full bg-medical-2 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-light-gray">12 patients</p>
            </CardContent>
          </Card>
        </div>
          

        {/*4.  PATIENT CHART */}

      <div className="mt-8 mb-8">
        <PatientChart />
      </div>

          {/* --- TABLE --- */}
        
        <div className="mt-14 grid gap-4 md:grid-cols-1">
          <Card className="bg-dark-navy text-medical-2">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>

            <CardContent >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-25 text-medical-blue-1 text-lg">ID</TableHead>
                    <TableHead className=" text-lg text-medical-blue-1">NAME</TableHead>
                    <TableHead className=" text-lg hidden md:table-cell text-medical-blue-1">STATUS</TableHead>
                    <TableHead className="text-right text-lg text-medical-blue-1">VISIT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient.map((patient) => (
                    <TableRow key={patient.ID}>
                      <TableCell className="font-medium text-light-gray">{patient.ID}</TableCell>
                      <TableCell className="font-medium text-light-gray">{patient.name}</TableCell>
                      <TableCell className="hidden text-light-gray md:table-cell">{patient.status}</TableCell>
                      <TableCell className="text-right text-light-gray">{patient.lastVisit}</TableCell>
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