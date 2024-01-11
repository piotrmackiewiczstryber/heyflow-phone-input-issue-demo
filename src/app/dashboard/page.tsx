import { Dashboard } from '@/components/Dashboard/Dashboard';
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main>
        <Dashboard />
      </main>
    </ProtectedRoute>
  );
}
