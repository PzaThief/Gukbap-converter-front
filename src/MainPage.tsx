import { Label } from "ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "ui/select"
import { Input } from "ui/input"

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <section className="flex flex-col space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md md:max-w-lg px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Currency Converter</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <Label htmlFor="from-currency">From</Label>
            <Select>
              <SelectTrigger aria-label="From currency" id="from-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">United States Dollar (USD)</SelectItem>
                <SelectItem value="EUR">Euro (EUR)</SelectItem>
                <SelectItem value="JPY">Japanese Yen (JPY)</SelectItem>
                <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" placeholder="Enter amount" type="number" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2 text-center">
          Reverse (will be icon)
          </div>
          <div className="col-span-1 space-y-2 text-center text-lg font-bold">
          =
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <Label htmlFor="to-currency">To</Label>
            <Select>
              <SelectTrigger aria-label="To currency" id="to-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">United States Dollar (USD)</SelectItem>
                <SelectItem value="EUR">Euro (EUR)</SelectItem>
                <SelectItem value="JPY">Japanese Yen (JPY)</SelectItem>
                <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 space-y-2">
          <Label htmlFor="amount">Exchanged Amount</Label>
          <div className="col-span-1 mt-2 md:mt-6 bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-800 dark:text-blue-200">
            -
          </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Popular Exchanges</h2>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-300">USD to EUR</li>
            <li className="text-gray-600 dark:text-gray-300">GBP to USD</li>
            <li className="text-gray-600 dark:text-gray-300">JPY to AUD</li>
            <li className="text-gray-600 dark:text-gray-300">EUR to GBP</li>
          </ul>
        </div>
      </section>
    </div>
  )
}