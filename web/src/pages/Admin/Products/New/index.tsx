import AdminComponent from '@/components/shared/AdminComponent'
import TitleAdminPanel from '@/components/shared/TitleAdminPanel'
import withAuthAdmin from '@/components/withAuthAdmin'

import ProductForm from '@/components/Admin/ProductForm'

import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import ProductsService from '@/services/products'

const New = () => {
  const router = useRouter()

  const handleSubmit = async (product: FormData): Promise<void>  => {
    try {
      if (!product.get('product[image]')) {
        toast.info('Image is required!')
        return
      }

      await ProductsService.create(product)

      toast.info('Successfully saved!')
      router.back()
    } catch (err) {
      toast.error('Error saving product!')
      console.log(err)
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Add product" path="Dashboard > Products > Add products" />

      <ProductForm handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New)