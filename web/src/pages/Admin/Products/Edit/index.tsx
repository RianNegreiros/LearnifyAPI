import React from 'react'
import AdminComponent from '@/components/shared/AdminComponent'
import TitleAdminPanel from '@/components/shared/TitleAdminPanel'

import withAuthAdmin from '@/components/withAuthAdmin'

import ProductForm from '@/components/Admin/ProductForm'
import ProductsService from '@/services/products'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'
import { clearProductToEdit } from '@/store/modules/admin/product/reducer'

const Edit = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (product: FormData): Promise<void> => {
    try {
      await ProductsService.update(product)

      toast.info('Successfully updated!')

      dispatch(clearProductToEdit())
      router.back()
    } catch (err) {
      toast.error('Error updating product!')
      console.log(err)
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Edit Product" path="Dashboard > Products > Product Details > Edit product" />

      <ProductForm action="Update" handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit)