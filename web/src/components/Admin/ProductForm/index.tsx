import { useState, useEffect } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles.module.css'
import StyledButton from '@/components/shared/StyledButton'
import ProductImage from './ProductImage'

import { useRouter } from 'next/router'
import useSwr from 'swr'
import CategoriesService from '@/services/categories'
import SystemRequirementsService from '@/services/systemRequirements'

import { toast } from 'react-toastify'

import { useSelector, useDispatch } from 'react-redux'
import Product from '@/dtos/Product'

import { clearProductToEdit } from '@/store/modules/admin/product/reducer'
import { RootState } from '@/store'

interface ProductFormProps {
  handleSubmit: (product: FormData) => Promise<void>
  action?: string
}

export default function ProductForm({ handleSubmit, action = 'Add' }: ProductFormProps) {
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [price, setPrice] = useState(0)
  const [status, setStatus] = useState('available')
  const [image, setImage] = useState<File>()
  
  const [mode, setMode] = useState('pve')
  const [releaseDate, setReleaseDate] = useState('')
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState('')

  const [systemRequirement, setSystemRequirement] = useState(1)

  const [productImage, setProductImage] = useState('')
  const [featured, setFeatured] = useState('false')

  const product: Product = useSelector((state: RootState) => state.product)

  const { data, error } = useSwr('/admin/v1/categories?length=999', CategoriesService.index)
  const { data: systemRequirementsData, error: systemRequirementsError } = 
    useSwr('/admin/v1/system_requirements?length=999', SystemRequirementsService.index)
  
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect (() => {
    if (product && router.pathname.includes('Edit')) {
      setName(product.name)
      setId(product.id)
      setDescription(product.description)

      setCategories(product.categories.map(category => category.id))

      setMode(product.mode)      
      setDeveloper(product.developer)
      setPublisher(product.publisher)

      setReleaseDate(product.release_date.split('T')[0])
      
      setSystemRequirement(product?.system_requirement?.id ?? 1)

      setPrice(product.price)
      setStatus(product.status)

      setFeatured(product.featured)

      setProductImage(product?.image_url)
    }
  }, [product])

  const handleFormSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()

    const formData = new FormData()

    formData.append('product[id]', id.toString())
    formData.append('product[name]', name)
    formData.append('product[description]', description)

    categories.forEach(category => 
      formData.append(`product[category_ids][]`, category)
    )
    
    formData.append('product[mode]', mode)
    formData.append('product[developer]', developer)
    formData.append('product[publisher]', publisher)
    formData.append('product[release_date]', releaseDate)
    formData.append('product[system_requirement_id]', systemRequirement.toString())

    formData.append('product[price]', price.toString())
    formData.append('product[status]', status)

    formData.append('product[productable]', 'game')
    formData.append('product[featured]', featured)

    if (image) {
      formData.append('product[image]', image)
    }

    handleSubmit(formData)
  }

  const handleCategoriesSelect = 
    (evt: React.ChangeEvent<HTMLSelectElement>): void => {
      const options = evt.target.selectedOptions
      if (options) {
        let selectedCategories: Number[] = []
        for (let i = 0; i < options.length; i++) {
          selectedCategories.push(Number(options[i].value))
        }
        setCategories(selectedCategories)
      }
  }

  if (error || systemRequirementsError) {
    toast.error('Error loading data')
    console.log(error)
  }

  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit}>
        <Row>

          <ProductImage
            setImage={setImage}
            productImage={productImage}
          />

          <Col lg={8}>
            <Form.Row>
              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type name"
                  className={styles.secundary_input}
                  value={name}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) =>
                      setName(evt.target.value)
                  }
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type ID"
                  className={styles.secundary_input}
                  value={id}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) =>
                      setId(Number(evt.target.value))
                  }
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm={12} className="p-2">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Type description"
                  className={styles.secundary_input}
                  value={description}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) =>
                      setDescription(evt.target.value)
                  }
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm={12} className="p-2">
                <Form.Label>Categories</Form.Label>
                <Form.Control 
                  as="select" 
                  className={styles.secundary_input}
                  onChange={handleCategoriesSelect}
                  value={categories}
                  multiple
                  required
                >
                  {
                    data?.categories.map(category => (
                      <option 
                        value={category.id} 
                        key={category.id}
                      >
                        {category.name}
                      </option>
                    ))
                  }
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Mode</Form.Label>
                <Form.Control
                  as="select"
                  className={styles.secundary_input}
                  value={mode}
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setMode(evt.target.value)
                  }
                >
                  <option value="pve">PVE</option>
                  <option value="pvp">PVP</option>
                  <option value="both">Both</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Developer</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.secundary_input}
                  defaultValue={developer}
                  placeholder="Type developer name"
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setDeveloper(evt.target.value)
                  }
                  required
                >
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.secundary_input}
                  defaultValue={publisher}
                  placeholder="Type publisher name"
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setPublisher(evt.target.value)
                  }
                  required
                >
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  type="date"
                  className={styles.secundary_input}
                  defaultValue={releaseDate}
                  placeholder="Type release date"
                  onChange={
                    (evt: React.ChangeEvent<HTMLDataElement>) =>
                      setReleaseDate(evt.target.value)
                  }
                  required
                >
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={6} sm={12} className="p-2">
                <Form.Label>System Requirement</Form.Label>
                <Form.Control
                  as="select"
                  className={styles.secundary_input}
                  value={systemRequirement}
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setSystemRequirement(Number(evt.target.value))
                  }
                  required
                >
                  {
                    systemRequirementsData?.system_requirements.map(
                        systemRequirement => (
                          <option 
                            value={systemRequirement.id}
                            key={systemRequirement.id}
                          >
                            {systemRequirement.name}
                          </option>
                        )
                      )
                  }
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row> 
              <Form.Group as={Col} md={4} sm={12} className="p-2">
                <Form.Label>Featured</Form.Label>
                <Form.Control
                  as="select"
                  className={styles.secundary_input}
                  value={featured}
                  onChange={
                      (evt: React.ChangeEvent<HTMLSelectElement>) => 
                        setFeatured(evt.target.value)
                    }
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4} sm={12} className="p-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type price"
                  className={styles.secundary_input}
                  value={price}
                  onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) =>
                      setPrice(Number(evt.target.value))
                  }
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={4} sm={12} className="p-2">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  className={styles.secundary_input}
                  value={status}
                  onChange={
                    (evt: React.ChangeEvent<HTMLSelectElement>) =>
                      setStatus(evt.target.value)
                  }
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </Form.Control>
              </Form.Group>

            </Form.Row>

          </Col>
        </Row>

        <div className={styles.details_button}>
          <StyledButton
            icon={faGamepad}
            action={action}
            type_button="blue"
            type="submit"
          />

          <StyledButton
            icon={faTimes}
            action={"Cancel"}
            type_button="red"
            onClick={() => {
              dispatch(clearProductToEdit())
              router.back()
            }}
          />
        </div>
      </Form>
    </div>
  )
}
