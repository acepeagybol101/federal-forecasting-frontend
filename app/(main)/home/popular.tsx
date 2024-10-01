import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Popular = () => {

  return (
    <div className="pb-20">
        <div className="py-16 text-5xl text-secondary text-center font-bold">
        Popular on Federal Forecasting App
        </div>
        <div className="grid md:grid-cols-3 gap-4">
            {Array(3).fill(null).map((_, index) => (
                <Card key={index} className="border-secondary">
                <CardHeader className="border-b-4 border-[#00ba00]">
                    <CardTitle className="text-xl font-semibold">
                    Federal Contract Opportunites
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className=" divide-y divide-gray-300">
                    <div className="px-6 py-4">
                        <div className="text-secondary text-lg">
                        Lorem ipsum dolor sit amet
                        </div>
                        <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing porro
                        quisquam...
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-secondary text-lg">
                        Lorem ipsum dolor sit amet
                        </div>
                        <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing porro
                        quisquam...
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
};

export default Popular;
