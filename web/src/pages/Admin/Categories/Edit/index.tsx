import AdminComponent from '@/components/shared/AdminComponent'
import TitleAdminPanel from '@/components/shared/TitleAdminPanel'
import Category from '@/dtos/Category'

import withAuthAdmin from '@/components/withAuthAdmin'

import { useDispatch } from 'react-redux'
import { clearCategoryToEdit } from '@/store/modules/admin/category/reducer'

import CategoriesService from '@/services/categories'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import CategoryForm from '@/components/Admin/CategoryForm'

function Edit() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (category: Category): Promise<void> => {
    try {
      await CategoriesService.update(category)

      toast.info('Successfully updated category!')

      dispatch(clearCategoryToEdit())
      router.back()
    } catch (err) {
      toast.error('Error trying to update category!')
      console.log(err)
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Edit Category" path="Dashboard > Categories > Category Details > Edit Category" />

      <CategoryForm handleSubmit={handleSubmit} action="Update"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit)