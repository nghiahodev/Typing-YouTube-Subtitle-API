const modelConfig = {
  // Customize how to JSON and Object work
  toJSON: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id
      return obj
    },
  },
  toObject: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id
      return obj
    },
  },
  // Disable the "__v" attribute in Schema
  versionKey: false,
  timestamps: true,
}
export default modelConfig
