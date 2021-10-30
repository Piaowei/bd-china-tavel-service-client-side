import React from 'react';
import './Destination.css'
import img1 from '../../../images/destination/guangzhou.jpg'
import img2 from '../../../images/destination/hangzhou.jpg'
import img3 from '../../../images/destination/hualien.jpg'
import img4 from '../../../images/destination/nanthou.jpg'
import img5 from '../../../images/destination/macau.jpg'
import img6 from '../../../images/destination/qindao.jpg'
import img7 from '../../../images/destination/chong.jpg'
import img8 from '../../../images/destination/zhuhai.jpg'
const Destination = () => {
	return (
		<div>
			<div class="row row-cols-1 row-cols-md-4 g-4">
				<div class="col">
					<div class="card">
						<img src={img1} class="card-img-top" alt="..." />
					</div>
				</div>

				<div class="col">
					<div class="card">
						<img src={img2} class="card-img-top" alt="..." />
					</div>
				</div>

				<div class="col">
					<div class="card">
						<img src={img3} class="card-img-top" alt="..." />
					</div>
				</div>


				<div class="col">
					<div class="card">
						<img src={img4} class="card-img-top" alt="..." />

					</div>
				</div>
				<div class="col">
					<div class="card">
						<img src={img5} class="card-img-top" alt="..." />

					</div>
				</div>
				<div class="col">
					<div class="card">
						<img src={img6} class="card-img-top" alt="..." />

					</div>
				</div>
				<div class="col">
					<div class="card">
						<img src={img7} class="card-img-top" alt="..." />

					</div>
				</div>
				<div class="col">
					<div class="card">
						<img src={img8} class="card-img-top" alt="..." />

					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;