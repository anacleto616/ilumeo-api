-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "employee_code" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeePointControlHistory" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "day_worked" TIMESTAMP(3) NOT NULL,
    "worked_hours" INTEGER NOT NULL,

    CONSTRAINT "EmployeePointControlHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_code_key" ON "Employee"("employee_code");

-- AddForeignKey
ALTER TABLE "EmployeePointControlHistory" ADD CONSTRAINT "EmployeePointControlHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
