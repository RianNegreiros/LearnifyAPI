import { useState, useEffect } from 'react'
import Meta from '@/dtos/Meta'
import StyledButton from '@/components/shared/StyledButton'
import PaginationService from '@/util/PaginationService'

import { useRouter } from 'next/router'

export default function Pagination({ page = 0, length = 0, total = 0, total_pages = 0 }: Meta) {
  const [pagination, setPagination] = useState(['1'])
  const router = useRouter()

  useEffect(() => {
    setPagination(PaginationService.execute(total_pages, page))
  }, [total_pages])

  const handlePageClick = (page: string): void => {
    router.push(`${router.pathname}?page=${page}`)
  }

  const handleNextPageClick = (): void => {
    if (page < total_pages) {
      router.push(`${router.pathname}?page=${page + 1}`)
    }
  }

  const handlePreviousPageClick = (): void => {
    if (page > 1) {
      router.push(`${router.pathname}?page=${page - 1}`)
    }
  }

  return (
    <div className="pagination justify-content-end">
      <div className="pagination">
        <StyledButton 
          action="<" 
          type_button="blue"
          onClick={handlePreviousPageClick}
        />

        {
          pagination.map((item, index) => (
            item === '...' ? '...' : (
                <StyledButton 
                  key={index}
                  action={item} 
                  type_button="blue"
                  active={page === Number(item) }
                  onClick={() => handlePageClick(item)}
                />
              )
            ))
        }

        <StyledButton 
          action=">" 
          type_button="blue" 
          onClick={handleNextPageClick}
        />
      </div>
    </div>
  )
}