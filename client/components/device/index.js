const DeviceView = {
  render(device) {
    const deviceStyle = `top: ${device.position.y};left: ${device.position.x}; width: ${device.size.w}px, height: ${device.size.h}px`;

    return `
      <div class="device" data-uuid="${device.uuid}" style="${deviceStyle}">
        <img src="img/${device.img}" alt="" />
      </div>
    `;
  }
};

export default DeviceView;
