
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const AppPreview = () => {
  const [activeTab, setActiveTab] = useState("login");
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[375px] mx-auto">
        <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl z-0"></div>
        <div className="relative z-10 mx-auto w-full max-w-[320px] bg-white rounded-3xl h-[600px] overflow-hidden">
          <div className="h-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-lg font-semibold">School App</h3>
                <TabsList className="mt-2 bg-blue-700">
                  <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Login</TabsTrigger>
                  <TabsTrigger value="dashboard" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Dashboard</TabsTrigger>
                  <TabsTrigger value="assignments" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Assignments</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="login" className="h-[calc(100%-88px)] flex flex-col p-5 data-[state=inactive]:hidden">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <div className="text-3xl">🏫</div>
                  </div>
                  <h2 className="text-xl font-bold mb-6">School Connect</h2>
                  <div className="w-full space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-1 block">Email</label>
                      <input 
                        type="email" 
                        placeholder="student@example.com" 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 mb-1 block">Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                      Login
                    </button>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-500 pt-4">
                  Firebase Authentication
                </div>
              </TabsContent>
              
              <TabsContent value="dashboard" className="h-[calc(100%-88px)] overflow-y-auto p-4 data-[state=inactive]:hidden">
                <div className="mb-4">
                  <h2 className="text-lg font-bold">Welcome, Sarah</h2>
                  <p className="text-sm text-gray-500">Student • Class 10-A</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-medium">Today's Quote:</div>
                  <div className="text-blue-800 italic">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</div>
                </div>
                
                <h3 className="font-medium mb-2">Today's Schedule</h3>
                <div className="space-y-2 mb-4">
                  {["Mathematics - 9:00 AM", "Science - 11:00 AM", "English - 2:00 PM"].map((item, i) => (
                    <div key={i} className="bg-white border rounded-md p-2 flex justify-between">
                      <span>{item}</span>
                      <span>🕒</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-medium mb-2">Recent Announcements</h3>
                <div className="border rounded-md divide-y">
                  {[
                    {title: "Sports Day", desc: "Annual sports day next Friday"},
                    {title: "Holiday Notice", desc: "School closed on Monday"},
                  ].map((item, i) => (
                    <div key={i} className="p-3">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="assignments" className="h-[calc(100%-88px)] overflow-y-auto p-4 data-[state=inactive]:hidden">
                <h2 className="text-lg font-bold mb-4">Assignments</h2>
                
                <div className="space-y-3">
                  {[
                    {
                      subject: "Mathematics",
                      title: "Algebra Assignment",
                      due: "May 25",
                      status: "Pending",
                      statusColor: "text-yellow-600 bg-yellow-50"
                    },
                    {
                      subject: "Science",
                      title: "Chemistry Lab Report",
                      due: "May 23",
                      status: "Submitted",
                      statusColor: "text-green-600 bg-green-50"
                    },
                    {
                      subject: "History",
                      title: "Ancient Civilizations",
                      due: "May 20",
                      status: "Graded: A",
                      statusColor: "text-blue-600 bg-blue-50"
                    },
                  ].map((item, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm text-gray-500">{item.subject}</div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm mt-1">Due: {item.due}</div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${item.statusColor}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="mt-3 text-sm">
                          <button className="text-blue-600">View Details</button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <button className="text-blue-600 text-sm">View All Assignments</button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="mt-10 px-4 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">Flutter + Firebase Implementation</h3>
        <p className="text-gray-600 mb-4">
          This interactive preview showcases key screens from our school management app. 
          The actual implementation would be built in Flutter using Dart, 
          with Firebase providing backend services for authentication, database, and storage.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium">Authentication</div>
            <div className="text-xs text-gray-500">Firebase Auth</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium">Data Storage</div>
            <div className="text-xs text-gray-500">Firestore</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium">File Storage</div>
            <div className="text-xs text-gray-500">Firebase Storage</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium">State Management</div>
            <div className="text-xs text-gray-500">Provider/Riverpod</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;
