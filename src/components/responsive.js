const sizes = {
  mobile : '414px',
  tablet : '821px',
  laptop : '1910px'
}

export const device = {
  mobile : `(max-width : ${sizes.mobile})`,
  tablet : `(max-width : ${sizes.tablet})`,
  laptop : `(max-width : ${sizes.laptop})`
}

export default device;