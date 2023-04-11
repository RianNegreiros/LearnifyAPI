import AdminComponent from '@/components/shared/AdminComponent'
import TitleAdminPanel from '@/components/shared/TitleAdminPanel'

import CategoryForm from '@/components/Admin/CategoryForm'

import withAuthAdmin from '@/components/withAuthAdmin'

import CategoriesService from '@/services/categories'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import Category from '@/dtos/Category'

function New() {
  const router = useRouter()

  const handleSubmit = async ({ name }: Category): Promise<void> => {
    try {
      await CategoriesService.create(name)
      toast.info('Successfully created category!')

      router.back()
    } catch (err) {
      toast.error('Error trying to create category!')
      console.log(err)
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Add Category" path="Dashboard > Categories > Add Category" />

      <CategoryForm handleSubmit={handleSubmit} action="Add" />
    </AdminComponent>
  )
}

export default withAuthAdmin(New)