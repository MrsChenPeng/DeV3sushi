import { BigNumber } from '@ethersproject/bignumber'
import { useAppSelector } from '../state/hooks'
import useCurrentBlockTimestamp from './useCurrentBlockTimestamp'
import { useMemo } from 'react'

// combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction
export default function useTransactionDeadline(): BigNumber | undefined {
  const ttl = useAppSelector((state) => state.user.userDeadline)

  const blockTimestamp = useCurrentBlockTimestamp()
  // console.log({ ttl, blockTimestamp })
  return useMemo(() => {
    if (blockTimestamp && ttl) return blockTimestamp.add(ttl)
    return undefined
  }, [blockTimestamp, ttl])
}
