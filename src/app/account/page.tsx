import DeleteAccount from '@/components/DeleteAccount';

export default function AccountPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Account Management
          </h1>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  );
} 