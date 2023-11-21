import Card from '@/components/Card'
import Chart from '@/components/Chart'
import Dashboard from '@/components/Dashboard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="container">
      <div className="w-full flex flex-row">
        <ThemeToggle />
      </div>
      <Card />
      <Chart />

      <Dashboard/>

    </div>
  )
}
