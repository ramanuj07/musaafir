
import { Input } from "./ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  

export default function Search(){
    return <div className="flex justify-end mr-20">
    
    <Card>
  <CardHeader>
    <CardTitle>Be A Musaafir!</CardTitle>
    <CardDescription>Find your next travel partner with us</CardDescription>
  </CardHeader>
  <CardContent>
  <div>
            <Input></Input>
        </div>
  </CardContent>
</Card>

    </div>
}
