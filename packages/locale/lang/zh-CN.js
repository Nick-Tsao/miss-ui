export default {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loadingTip: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  msContactCard: {
    addText: '添加联系人'
  },
  msContactList: {
    addText: '新建联系人'
  },
  msPagination: {
    prev: '上一页',
    next: '下一页'
  },
  msPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  msSubmitBar: {
    label: '合计：'
  },
  msCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: count => `${count}张可用`
  },
  msCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  msCouponItem: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: discount => `${discount}折`,
    condition: (condition) => `满${condition}元可用`
  },
  msAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  msAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  msAddressList: {
    add: '新增地址'
  }
};
