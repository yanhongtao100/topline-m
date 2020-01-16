// 文章评论模块
import request from '@/utils/request'
// 获取文章评论或评论恢复
export const getComments = (params) => {
  return request({
    method: 'get',
    url: `/app/v1_0/comments`,
    params
  })
}
