import React from 'react'

const Nuevo = () => {
    return (
        <div class="flex items-center justify-center w-screen h-screen font-medium">
	<div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
		
		<div class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
			<div class="flex items-center mb-6">
				<svg class="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
				</svg>
				<h4 class="font-semibold ml-3 text-lg">Sam's Jobs</h4>
			</div>
			<div>
				<input class="hidden" type="checkbox" id="task_6" checked/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_6">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Trim the verge.</span>
				</label>	
			</div>
			<div>
				<input class="hidden" type="checkbox" id="task_7" checked/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_7">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Eavesdrop on Master Frodo & Gandalf.</span>
				</label>	
			</div>
			<div>
				<input class="hidden" type="checkbox" id="task_8"/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_8">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Boil, mash, and stick potatoes in stew.</span>
				</label>	
			</div>
			<div>
				<input class="hidden" type="checkbox" id="task_9"/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_9">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Carry Frodo.</span>
				</label>	
			</div>
			<div>
				<input class="hidden" type="checkbox" id="task_10"/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_10">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Be all round legend.</span>
				</label>	
			</div>
			<button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
				<svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
				<input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task"/>
			</button>
		</div>
		
	</div>
</div>
    )
}


export default Nuevo