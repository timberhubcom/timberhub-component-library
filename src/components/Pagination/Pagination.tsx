import { clsx } from 'clsx'
import React, { useMemo } from 'react'

import styles from './Pagination.module.scss'

export interface PaginationProps {
  activePage?: number
  totalPages?: number
  visiblePages?: number // Number of visible page buttons
  ellipsisThreshold?: number // Minimum number of pages required to display ellipses
  onPageChange?: (page?: number) => void
}

const Pagination = ({
  activePage = 1,
  onPageChange: _onPageChange,
  totalPages = 0,
  visiblePages = 5,
  ellipsisThreshold = 2,
}: PaginationProps) => {
  const pageRange = useMemo(() => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const currentPage = activePage || 1
    let startPage = currentPage - Math.floor(visiblePages / 2)

    if (startPage < 1) {
      startPage = 1
    } else if (startPage + visiblePages > totalPages) {
      startPage = totalPages - visiblePages + 1
    }

    return Array.from({ length: visiblePages }, (_, i) => i + startPage)
  }, [activePage, totalPages, visiblePages])

  const onPageChange = (page?: number) => {
    _onPageChange?.(page)
  }

  return (
    <>
      {totalPages > 1 && (
        <div className={clsx(styles.pagerWrapper)} data-testid={'pagination'}>
          {activePage !== undefined && activePage !== 1 && (
            <>
              <button onClick={() => onPageChange()} className={styles.first} title={'First'}>
                <svg
                  width={'20'}
                  height={'22'}
                  viewBox={'0 0 20 22'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}>
                  <path
                    d={
                      'M10.364 10.9497L19.6066 20.1923C19.9971 20.5829 19.9971 21.216 19.6066 21.6065C19.2161 21.9971 18.5829 21.9971 18.1924 21.6065L8.29289 11.7071C8.08485 11.499 7.98763 11.2221 8.00126 10.9497C7.98765 10.6773 8.08486 10.4004 8.2929 10.1924L18.1924 0.292897C18.5829 -0.0976376 19.2161 -0.0976273 19.6066 0.292897C19.9971 0.683418 19.9971 1.31658 19.6066 1.70711L10.364 10.9497Z'
                    }
                    fill={'black'}
                  />
                  <path
                    d={
                      'M2.36399 10.9502L11.6066 20.1928C11.9971 20.5834 11.9971 21.2165 11.6066 21.607C11.2161 21.9976 10.5829 21.9976 10.1924 21.607L0.292892 11.7075C0.0848462 11.4995 -0.0123654 11.2226 0.00125546 10.9502C-0.0123507 10.6778 0.0848627 10.4009 0.292896 10.1929L10.1924 0.293386C10.5829 -0.0971493 11.2161 -0.097139 11.6066 0.293386C11.9971 0.683907 11.9971 1.31706 11.6066 1.7076L2.36399 10.9502Z'
                    }
                    fill={'black'}
                  />
                </svg>
              </button>
              <button title={'Previous'} onClick={() => onPageChange(activePage - 1)} className={styles.previous}>
                <svg
                  width={'13'}
                  height={'23'}
                  viewBox={'0 0 13 23'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}>
                  <path
                    d={
                      'M2.58561 11.3159L11.8282 20.5585C12.2188 20.9491 12.2187 21.5822 11.8282 21.9728C11.4377 22.3633 10.8045 22.3633 10.414 21.9728L0.514511 12.0733C0.306465 11.8652 0.209253 11.5883 0.222874 11.3159C0.209268 11.0435 0.306481 10.7666 0.514515 10.5586L10.414 0.659108C10.8045 0.268573 11.4377 0.268584 11.8282 0.659108C12.2187 1.04963 12.2188 1.68279 11.8282 2.07332L2.58561 11.3159Z'
                    }
                    fill={'black'}
                  />
                </svg>
              </button>
            </>
          )}
          {pageRange[0] > ellipsisThreshold && <button onClick={() => onPageChange(pageRange[0] - 1)}>&hellip;</button>}
          {pageRange.map((item) => (
            <div className={styles.pageWrapper} key={'paginate-key-' + item}>
              {activePage === undefined ? (
                <>
                  {item === 1 ? (
                    <div className={styles.currentPage}>{item}</div>
                  ) : (
                    <button onClick={() => onPageChange(item)} className={styles.page}>
                      {item}
                    </button>
                  )}
                </>
              ) : (
                <>
                  {activePage === item ? (
                    <div className={styles.currentPage}>{item}</div>
                  ) : (
                    <button onClick={() => onPageChange(item)} className={styles.page}>
                      {item}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}

          {pageRange[pageRange.length - 1] < totalPages - ellipsisThreshold && (
            <button onClick={() => onPageChange(pageRange[pageRange.length - 1] + 1)}>&hellip;</button>
          )}

          {(activePage === undefined || activePage !== totalPages) && (
            <>
              <button
                title={'Next'}
                onClick={() => onPageChange(activePage === undefined ? 1 : activePage + 1)}
                className={styles.next}>
                <svg
                  width={'13'}
                  height={'23'}
                  viewBox={'0 0 13 23'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}>
                  <path
                    d={
                      'M10.5186 11.1275L1.27599 1.88484C0.885458 1.49431 0.885472 0.861151 1.27599 0.47063C1.66651 0.0801096 2.29967 0.0800954 2.69021 0.47063L12.5897 10.3701C12.7977 10.5782 12.895 10.8551 12.8813 11.1275C12.8949 11.3999 12.7977 11.6768 12.5897 11.8848L2.6902 21.7843C2.29967 22.1748 1.66651 22.1748 1.27599 21.7843C0.885468 21.3938 0.885454 20.7606 1.27599 20.3701L10.5186 11.1275Z'
                    }
                    fill={'black'}
                  />
                </svg>
              </button>
              <button title={'Last'} onClick={() => onPageChange(totalPages)} className={styles.last}>
                <svg
                  width={'20'}
                  height={'22'}
                  viewBox={'0 0 20 22'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}>
                  <path
                    d={
                      'M9.53555 10.9502L0.292936 1.70757C-0.0975991 1.31703 -0.0975847 0.683877 0.292936 0.293356C0.683457 -0.097165 1.31661 -0.09718 1.70715 0.293354L11.6066 10.1928C11.8147 10.4009 11.9119 10.6778 11.8983 10.9502C11.9119 11.2226 11.8147 11.4995 11.6066 11.7075L1.70715 21.607C1.31661 21.9975 0.683457 21.9975 0.292933 21.607C-0.0975884 21.2165 -0.0976024 20.5833 0.292933 20.1928L9.53555 10.9502Z'
                    }
                    fill={'black'}
                  />
                  <path
                    d={
                      'M17.5355 10.9497L8.29294 1.70708C7.9024 1.31655 7.90242 0.683389 8.29294 0.292868C8.68346 -0.0976532 9.31661 -0.0976683 9.70715 0.292866L19.6066 10.1924C19.8147 10.4004 19.9119 10.6773 19.8983 10.9497C19.9119 11.2221 19.8147 11.499 19.6066 11.707L9.70715 21.6065C9.31661 21.9971 8.68346 21.997 8.29293 21.6065C7.90241 21.216 7.9024 20.5828 8.29293 20.1923L17.5355 10.9497Z'
                    }
                    fill={'black'}
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Pagination
